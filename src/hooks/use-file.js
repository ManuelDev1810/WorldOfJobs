import { useCallback, useState } from "react";

const useFile = () => {
  const [file, setFile] = useState("");

  const convertToBase64 = useCallback(async (file) => {
    let reader = new FileReader();
    await reader.readAsDataURL(file);
    reader.onload = async () => {
      setFile(reader.result);
    };
    reader.onerror = (error) => {
      //TODO: Send notification error
      console.log("Error: ", error);
    };
  }, []);

  return {
    file,
    convertToBase64,
  };
};

export default useFile;
