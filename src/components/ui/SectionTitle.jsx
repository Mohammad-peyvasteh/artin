
export default function SectionTitle({ title, description, light = false }) {
  return (
    <div className={`section-title ${light ? "text-white" : ""}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
