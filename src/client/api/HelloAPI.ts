import IHelloResponse from "../../shared/api/HelloModel";

class HelloAPI {

  public static async callApi(): Promise<IHelloResponse> {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

}
export default HelloAPI;