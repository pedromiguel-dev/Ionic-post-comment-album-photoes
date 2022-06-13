import React from "react";
import * as I from "@ionic/react";

interface propsInterface {
  src: string;
  title: string;
}
const PhotoCp = (props: propsInterface) => {
  return (
    <I.IonCard>
      <img src={props.src} alt={props.title} />
    </I.IonCard>
  );
};

export default PhotoCp;
