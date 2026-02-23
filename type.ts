type PlayerA = {
  name: string;
};
type PlayerAA = PlayerA & {
  lastName: string;
};
const playerA: PlayerAA = {
  name: "samsepi0l",
  lastName: "sepi0l",
};
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
interface PlayerBB {
  health: number;
}
const playerB: PlayerBB = {
  name: "samsepi0l",
  lastName: "sepi0l",
  health: 10,
};
