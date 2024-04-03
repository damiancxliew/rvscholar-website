import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../client/src/api/firebase-config";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

export async function createCard(deckId: string, values: any): Promise<any> {
  
  // function to generate the cardId
  function generateCardId(name:string){
    const searchRegExp = /\s/g
    const replaceWith = ''
    let res = name.replace(searchRegExp, replaceWith).toLowerCase()
    return res
  }

  const db = getFirestore(firebaseApp);
  // upload the photo of the person to firebase storage
  const storage = getStorage(firebaseApp);

  /** @type {any} */
  const metadata: any = {
    contentType: values.image.type
  };

  // Upload file and metadata to the object 'pictures/<filename>.jpg'
  const storageRef = ref(storage, 'pictures/' + values.name);
  const uploadTask = uploadBytesResumable(storageRef, values.image, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          // console.log('Upload is paused');
          break;
        case 'running':
          // console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          alert("You do not have access to the upload. Please contact the developer at aibivivacity@gmail.com")
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
      .then(async (downloadURL) => {
        // create a new field in the corresponding deck(document) in firestore
        const deckRef = doc(db, "decks", deckId)
        const cardId = generateCardId(values.name)

        await updateDoc(deckRef, {
          [cardId]: {
              name: values.name,
              interests: values.interest,
              graduateYear: deckId,
              experience: values.experience,
              imageLink: downloadURL
          }
        })
        console.log("Done uploading")
      })

    }
  );

  // return the updated deck

  // const response = await axios.post(`${API_URL}/life/${deckId}/cards`, values, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // });
  // // const response = await fetch(`${API_URL}/life/${deckId}/cards`, {
  // //   method: "POST",
  // //   body: JSON.stringify({values}),
  // //   headers: {
  // //     "Content-Type": "multipart/form-data",
  // //   },
  // // });
  // console.log(JSON.stringify(response));
  // return JSON.stringify(response);
}

