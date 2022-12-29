import More from "./more";
import Tag from "./tag";

const note = {
  title: "Shooting with Nastya",
  content:
    "I need to meet with Nastya for a shooting session. We will go to Alish Coffe to take some photos. I need to meet with Nastya for a shooting session. We will go to Alish Coffe to take some photos",
  tag: "personal",
  date: "20.12.2022",
};

export default function Note() {
  return (
    <div className="bg-white w-96 h-80 rounded-3xl p-4 py-6 m-4 flex flex-col gap-4 shadow-md">
      <div className="flex justify-between items-center">
        <Tag tag={note.tag} />
        <More />
      </div>
      <div className="w-[98%] border-b border-black/50" />
      <div className="">
        <span className="text-black/50 text-sm">{note.date}</span>
        <h3 className="font-bold text-black/80">{note.title}</h3>
      </div>
      <div className="overflow-hidden">
        <p className="text-black/50 text-sm">{note.content}</p>
      </div>
    </div>
  );
}
