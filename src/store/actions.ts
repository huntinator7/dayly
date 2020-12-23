export type StoreAction = toggleTest | setTest;

interface toggleTest {
  type: "TOGGLE_TEST";
}

interface setTest {
  type: "SET_TEST";
  test: boolean;
}
