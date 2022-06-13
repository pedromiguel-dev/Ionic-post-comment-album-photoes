import * as I from "@ionic/react";

interface dataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsCp = (props: dataProps) => {
  return (
    <I.IonCard id={props.id.toString()}>
      <I.IonCardHeader data-user-id={props.userId}>
        <I.IonCardTitle>{props.title}</I.IonCardTitle>
      </I.IonCardHeader>
      <I.IonCardContent>
        <I.IonText>{props.body}</I.IonText>
      </I.IonCardContent>
    </I.IonCard>
  );
};

export default PostsCp;
