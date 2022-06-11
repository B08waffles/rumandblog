export default function Tags({ tag }) {
  return (
    <div className="control">
      <div className="tags">
        <span className="tag has-background-info has-text-white is-medium has-text-weight-semibold  is-size-5-desktop is-size-6-tablet is-size-7-touch">
          {tag}
        </span>
      </div>
    </div>
  );
}
