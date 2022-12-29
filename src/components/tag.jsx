export default function Tag({ tag }) {
  return (
    <div className="w-fit rounded-2xl bg-blue px-2">
      <span className="capitalize">{tag}</span>
    </div>
  );
}
