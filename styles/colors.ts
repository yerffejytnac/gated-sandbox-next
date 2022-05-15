import common from "./colors/common";
import blue from "./colors/blue";
import blueGray from "./colors/blueGray";
import blueLight from "./colors/blueLight";
import brown from "./colors/brown";
import cyan from "./colors/cyan";
import gray from "./colors/gray";
import green from "./colors/green";
import greenLight from "./colors/greenLight";
import indigo from "./colors/indigo";
import lime from "./colors/lime";
import orange from "./colors/orange";
import orangeDeep from "./colors/orangeDeep";
import pink from "./colors/pink";
import purple from "./colors/purple";
import purpleDeep from "./colors/purpleDeep";
import red from "./colors/red";
import teal from "./colors/teal";
import yellow from "./colors/yellow";

export const colors = {
  ...common,
  blue,
  blueGray,
  blueLight,
  brown,
  cyan,
  gray,
  green,
  greenLight,
  indigo,
  lime,
  orange,
  orangeDeep,
  pink,
  purple,
  purpleDeep,
  red,
  teal,
  yellow,
};

export type Colors = typeof colors;
