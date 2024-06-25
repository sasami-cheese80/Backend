import { describe, it } from "mocha";
import { assert, expect } from "chai";
import axios from "axios";

describe("テストのテスト", () => {
  it("本当にtaroって返す？", () => {
    assert.equal("taro", "taro");
  });
});

describe("/users", () => {
  it("GETを送るとデータが返ってくる", async () => {
    const res = await axios.get("http://localhost:3000/users");
    expect(res).to.be.a("object");
  });
});
