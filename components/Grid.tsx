import { BentoGrid, BentoGridItem } from "./ui/Bentogrid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{title: "Title1", description: "desc1"}].map((item) => (
          <BentoGridItem id={item.id} key={item.id} title={item.title} description={item.description} />
        ))}
      </BentoGrid>
    </section>
  );
};
