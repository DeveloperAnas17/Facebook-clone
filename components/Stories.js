import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Aman Abbasi",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/1dv",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezon",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex items-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          profile={story.profile}
          src={story.src}
        />
      ))}
    </div>
  );
}

export default Stories;
