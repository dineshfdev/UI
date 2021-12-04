import { sgServices } from "./apiUtils";

export const getAllUniqueGarages = () =>
  sgServices.get({ endpoint: "/getAllUniqueGarageLocations" });

export const getAllGarages = () =>
  sgServices.get({ endpoint: "/getAllGarages" });

export const getLocationByLocation = (location) =>
  sgServices.get({ endpoint: `/getGaragesOnLocation?location=${location}` });

export const getGaragesByName = (name) =>
  sgServices.get({ endpoint: `/getGarageDetailsByName?garageName=${name}` });

export const getGaragesByNameandLocation = (name, location) =>
  sgServices.get({
    endpoint: `/getAllGaragesWithNameOnLocation?garageName=${name}&location=${location}`,
  });

export const getAllGaragesUsingRegex = (name) =>
  sgServices.get({
    endpoint: `/getAllGaragesUsingRegex?garageNameContaining=${name}`,
  });

export const getAllGaragesByLatAndLong = (distance, latitude, longitude) =>
  sgServices.get({
    endpoint: `/getGaragesByLatAndLong?distanceInKms=${distance}&latitude=${latitude}&longitude=${longitude}`,
  });

export const getReviewRating = (value, location) =>
  sgServices.get({
    endpoint: `getReviewsOfGarage?garageName=${value}&location=${location}`,
  });

export const getOverallReviewRating = (value, location) =>
  sgServices.get({
    endpoint: `getOverallReviewRatingsOfGarage?garageName=${value}&location=${location}`,
  });

export const createNewGarage = async (formData) => {
  await sgServices.file({
    endpoint: "/createGarage",
    data: formData,
  });
};

export const getTopGaragesNearLocation = (latitude, longitude) =>
  sgServices.get({
    endpoint: `/getTopGaragesNearLocation?latitude=${latitude}&longitude=${longitude}`,
  });
