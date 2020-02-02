import React from 'react';
import { IonContent, IonHeader, IonItem, IonInput, IonButton, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { camera } from 'ionicons/icons';

import "./Tab2.css"
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scan-A-Meter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonInput placeholder="Input ya shit"></IonInput>
        <IonButton>Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
