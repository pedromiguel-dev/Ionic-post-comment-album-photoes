import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import PhotoCp from "../../components/photoCp";
import React from "react";
import axios from "axios";

interface photosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Tab2: React.FC = () => {
  const [photos, setPhotos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      const photos = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        {
          params: {
            _limit: 10,
          },
        }
      );
      setPhotos(photos.data);
      setIsLoading(false);
    };
    fetchPhotos();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          {isLoading ? (
            <IsLoading />
          ) : (
            photos.map((item: photosProps) => (
              <IonRow key={item.id}>
                <IonCol>
                  <PhotoCp src={item.url} title={item.title} />
                </IonCol>
                <IonCol>
                  <PhotoCp src={item.url} title={item.title} />
                </IonCol>
              </IonRow>
            ))
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const IsLoading = () => {
  return (
    <IonRow>
      <IonCol>
        <IonSpinner />
      </IonCol>
      <IonCol>
        <IonSpinner />
      </IonCol>
    </IonRow>
  );
};

export default Tab2;
