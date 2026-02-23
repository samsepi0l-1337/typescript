type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player = {
  nickname: string;
  team: Team;
  health: Health;
};

const sepi: Player = {
  nickname: "sepi",
  team: "red",
  health: 10,
};
