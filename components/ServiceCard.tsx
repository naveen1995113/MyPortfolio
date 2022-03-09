import React from "react";
import { IService } from "../types";

const ServiceCard: React.FC<IService> = ({ Icon, title, about }) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-4 space-x-4">
      <Icon className="w-12 h-12 text-cblue dark:text-clight" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};
export default ServiceCard;
