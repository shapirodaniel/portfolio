import React, { useEffect, useState } from 'react';

export const useIntersection = (nodeRef, callback) => {

  let options = {
    root: document.querySelector(nodeRef.current.id),
    rootMargin: '0px',
    threshold: 1.0
  }

  let observer = new IntersectionObserver(callback, options)
};
