import React from "react";
import { questgenRepository } from "../repository/questgen-repository";

export function useQuestgen(): [
  answer: any,
  handleQuestGen: (context: string, questType: string, level: string) => void
] {
  const [answer, setAnswer] = React.useState([]);

  // const [loading, setLoading] = React.useState<boolean>(false);

  const handleGenQuest = React.useCallback(
    async (context: string, questType: string, level: string) => {
      console.log(context !== "", !isNaN(Number(questType)));
      if (
        context !== "" &&
        !isNaN(Number(questType)) &&
        !isNaN(Number(level))
      ) {
        try {
          const response = questgenRepository.product(
            context,
            questType,
            level
          );
          console.log(
            response.then((r) => {
              setAnswer(r);
              console.log(r);
            })
          );
        } catch (error: any) {
          console.error(`API Error: ${error?.message}`);
        }
      }
    },
    []
  );

  return [answer, handleGenQuest];
}
