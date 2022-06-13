import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import PostsCp from "../../components/postsCp";
import axios from "axios";

interface dataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Tab1: React.FC = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {data?.map((item: dataProps) => (
          <PostsCp
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            userId={item.userId}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
