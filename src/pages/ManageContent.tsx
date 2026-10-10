import { useState } from "react";
import { capabilities as defaultCapabilities } from "../data/capabilities";
import { experience as defaultExperience } from "../data/experience";
import { articles as defaultArticles } from "../data/articles";
import { projects as defaultProjects } from "../data/projects";
import { useStoredCollection } from "../hooks/useStoredCollection";
import type { Article } from "../types/article";
import type { Capability } from "../types/capability";
import type { ExperienceItem } from "../types/experience";
import type { Project } from "../types/project";

type CollectionName = "projects" | "experience" | "writing" | "capabilities";

const tabs: { id: CollectionName; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "capabilities", label: "Capabilities" },
];

export function ManageContent() {
  const [activeTab, setActiveTab] = useState<CollectionName>("projects");
  const projects = useStoredCollection<Project>(
    "portfolio-projects",
    defaultProjects,
  );
  const experience = useStoredCollection<ExperienceItem>(
    "portfolio-experience",
    defaultExperience,
  );
  const articles = useStoredCollection<Article>(
    "portfolio-articles",
    defaultArticles,
  );
  const capabilities = useStoredCollection<Capability>(
    "portfolio-capabilities",
    defaultCapabilities,
  );

  const [projectDrafts, setProjectDrafts] = useState(projects.items);
  const [experienceDrafts, setExperienceDrafts] = useState(experience.items);
  const [articleDrafts, setArticleDrafts] = useState(articles.items);
  const [capabilityDrafts, setCapabilityDrafts] = useState(capabilities.items);
  const [saveMessage, setSaveMessage] = useState("");

  const saveActiveCollection = () => {
    if (activeTab === "projects") projects.saveItems(projectDrafts);
    if (activeTab === "experience") experience.saveItems(experienceDrafts);
    if (activeTab === "writing") articles.saveItems(articleDrafts);
    if (activeTab === "capabilities") capabilities.saveItems(capabilityDrafts);

    setSaveMessage("Changes saved");
  };

  const selectTab = (tab: CollectionName) => {
    setActiveTab(tab);
    setSaveMessage("");
  };

  return (
    <main className="manager">
      <header className="manager__header">
        <div>
          <p className="eyebrow">LOCAL CONTENT EDITOR</p>
          <h1>Manage Portfolio</h1>
          <p>
            Changes are saved only in this browser until a database is
            connected.
          </p>
        </div>
        <div className="manager__actions">
          <span className="manager__save-status" role="status">
            {saveMessage}
          </span>
          <button
            type="button"
            className="manager__save"
            onClick={saveActiveCollection}
          >
            Save changes
          </button>
          <a className="manager__back" href="#home">
            Back to portfolio
          </a>
        </div>
      </header>

      <nav className="manager__tabs" aria-label="Content collections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={activeTab === tab.id ? "is-active" : ""}
            onClick={() => selectTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {activeTab === "projects" && (
        <ProjectEditor
          items={projectDrafts}
          onChange={setProjectDrafts}
          onReset={() => setProjectDrafts(defaultProjects)}
        />
      )}
      {activeTab === "experience" && (
        <ExperienceEditor
          items={experienceDrafts}
          onChange={setExperienceDrafts}
          onReset={() => setExperienceDrafts(defaultExperience)}
        />
      )}
      {activeTab === "writing" && (
        <ArticleEditor
          items={articleDrafts}
          onChange={setArticleDrafts}
          onReset={() => setArticleDrafts(defaultArticles)}
        />
      )}
      {activeTab === "capabilities" && (
        <CapabilityEditor
          items={capabilityDrafts}
          onChange={setCapabilityDrafts}
          onReset={() => setCapabilityDrafts(defaultCapabilities)}
        />
      )}
    </main>
  );
}

interface EditorProps<T> {
  items: T[];
  onChange: (items: T[]) => void;
  onReset: () => void;
}

function EditorHeader({
  title,
  onAdd,
  onReset,
}: {
  title: string;
  onAdd: () => void;
  onReset: () => void;
}) {
  return (
    <div className="editor__heading">
      <h2>{title}</h2>
      <div>
        <button
          type="button"
          className="editor-button editor-button--secondary"
          onClick={onReset}
        >
          Reset defaults
        </button>
        <button type="button" className="editor-button" onClick={onAdd}>
          Add new
        </button>
      </div>
    </div>
  );
}

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="editor-delete" onClick={onClick}>
      Delete
    </button>
  );
}

function ProjectEditor({ items, onChange, onReset }: EditorProps<Project>) {
  const update = (
    index: number,
    field: keyof Project,
    value: string | string[],
  ) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const add = () =>
    onChange([
      ...items,
      {
        index: String(items.length + 1).padStart(2, "0"),
        title: "New Project",
        description: "Add a short project description.",
        technologies: [],
        status: "Draft",
        caseStudy: "Add a concise project case study.",
      },
    ]);

  return (
    <section className="editor">
      <EditorHeader title="Projects" onAdd={add} onReset={onReset} />
      <div className="editor__list">
        {items.map((project, index) => (
          <article className="editor-card" key={project.index}>
            <label>
              Title
              <input
                value={project.title}
                onChange={(event) => update(index, "title", event.target.value)}
              />
            </label>
            <label>
              Description
              <textarea
                value={project.description}
                onChange={(event) =>
                  update(index, "description", event.target.value)
                }
              />
            </label>
            <label>
              Technologies
              <input
                value={project.technologies.join(", ")}
                onChange={(event) =>
                  update(
                    index,
                    "technologies",
                    event.target.value
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean),
                  )
                }
              />
            </label>
            <DeleteButton
              onClick={() =>
                onChange(items.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceEditor({
  items,
  onChange,
  onReset,
}: EditorProps<ExperienceItem>) {
  const update = (
    index: number,
    field: keyof ExperienceItem,
    value: string,
  ) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const add = () =>
    onChange([
      ...items,
      {
        title: "New Role",
        organization: "Company or Organization",
        period: "Start - End",
        description: "Describe this experience.",
        isPlaceholder: true,
      },
    ]);

  return (
    <section className="editor">
      <EditorHeader title="Experience" onAdd={add} onReset={onReset} />
      <div className="editor__list">
        {items.map((item, index) => (
          <article className="editor-card" key={`${item.title}-${index}`}>
            <label>
              Role
              <input
                value={item.title}
                onChange={(event) => update(index, "title", event.target.value)}
              />
            </label>
            <label>
              Organization
              <input
                value={item.organization}
                onChange={(event) =>
                  update(index, "organization", event.target.value)
                }
              />
            </label>
            <label>
              Period
              <input
                value={item.period}
                onChange={(event) =>
                  update(index, "period", event.target.value)
                }
              />
            </label>
            <label>
              Description
              <textarea
                value={item.description}
                onChange={(event) =>
                  update(index, "description", event.target.value)
                }
              />
            </label>
            <DeleteButton
              onClick={() =>
                onChange(items.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </article>
        ))}
      </div>
    </section>
  );
}

function ArticleEditor({ items, onChange, onReset }: EditorProps<Article>) {
  const update = (index: number, field: keyof Article, value: string) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const add = () =>
    onChange([
      ...items,
      { title: "New Article", category: "Development", status: "Planned" },
    ]);

  return (
    <section className="editor">
      <EditorHeader title="Writing" onAdd={add} onReset={onReset} />
      <div className="editor__list">
        {items.map((article, index) => (
          <article className="editor-card" key={`${article.title}-${index}`}>
            <label>
              Title
              <input
                value={article.title}
                onChange={(event) => update(index, "title", event.target.value)}
              />
            </label>
            <label>
              Category
              <input
                value={article.category}
                onChange={(event) =>
                  update(index, "category", event.target.value)
                }
              />
            </label>
            <label>
              Status
              <select
                value={article.status}
                onChange={(event) =>
                  update(index, "status", event.target.value)
                }
              >
                <option>Planned</option>
                <option>Draft</option>
              </select>
            </label>
            <DeleteButton
              onClick={() =>
                onChange(items.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </article>
        ))}
      </div>
    </section>
  );
}

function CapabilityEditor({
  items,
  onChange,
  onReset,
}: EditorProps<Capability>) {
  const update = (
    index: number,
    field: keyof Capability,
    value: string | string[],
  ) => {
    onChange(
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const add = () =>
    onChange([
      ...items,
      {
        number: String(items.length + 1).padStart(2, "0"),
        title: "New Capability",
        items: [],
      },
    ]);

  return (
    <section className="editor">
      <EditorHeader title="Capabilities" onAdd={add} onReset={onReset} />
      <div className="editor__list">
        {items.map((capability, index) => (
          <article className="editor-card" key={capability.number}>
            <label>
              Title
              <input
                value={capability.title}
                onChange={(event) => update(index, "title", event.target.value)}
              />
            </label>
            <label>
              Skills
              <input
                value={capability.items.join(", ")}
                onChange={(event) =>
                  update(
                    index,
                    "items",
                    event.target.value
                      .split(",")
                      .map((item) => item.trim())
                      .filter(Boolean),
                  )
                }
              />
            </label>
            <DeleteButton
              onClick={() =>
                onChange(items.filter((_, itemIndex) => itemIndex !== index))
              }
            />
          </article>
        ))}
      </div>
    </section>
  );
}
