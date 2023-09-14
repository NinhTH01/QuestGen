export class QuestgenRepository {
  public product = async (data: any): Promise<any> => {
    console.log(data);

    const response = await fetch("http://127.0.0.1:8000/api/getQuestFromText", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result as any[];
  };

  public category = async (): Promise<string[]> => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    const result = await response.json();

    return result as string[];
  };
}

export const questgenRepository: QuestgenRepository = new QuestgenRepository();
