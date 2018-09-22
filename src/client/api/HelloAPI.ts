import IHelloDTO from "../../shared/model/IHelloDTO";

class HelloAPI {

  public static async callApi(): Promise<IHelloDTO> {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

}

export default HelloAPI;
