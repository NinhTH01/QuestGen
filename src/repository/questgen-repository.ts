export class QuestgenRepository {
  public product = async (
    context: string,
    questType: string,
    level: string
  ): Promise<any> => {
    const response = await fetch("https://fakestoreapi.com/products");

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
