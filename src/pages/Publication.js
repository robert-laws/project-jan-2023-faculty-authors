import React from 'react';
import { useParams } from 'react-router-dom';

export const Publication = () => {
  const { id } = useParams();

  return (
    <div>
      Publication
      <p>ID: {id}</p>
    </div>
  );
};
