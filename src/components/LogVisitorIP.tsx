import { useEffect } from 'react';

export const LogVisitorIP = () => {
  useEffect(() => {
    fetch('/.netlify/functions/log-ip')
      .then((res) => res.json())
      .then((data) => {
        console.log("Visitor IP:", data.ip);
      });
  }, []);

  return null;
};
