interface User {
  name: string;
}

interface Player extends User {}

const sepi: Player = {
  name: "sepi",
};
