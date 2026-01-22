import React, { useEffect, useState } from "react";
import { RewardPopup } from "./reward-popup";

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div>
      <RewardPopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Content;
