import { useEffect } from 'react';

export default function useDocumentTitle(title){
    useEffect(() => {
        document.title = title;
        return () => {
          //   write cleanup code.. anything present in component will unmount
          console.log("cleanup");
        };
      });
}