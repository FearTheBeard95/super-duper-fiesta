/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument {
    onCreateDocument {
      id
      name
      abstract
      type
      issueDate
      file
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument {
    onUpdateDocument {
      id
      name
      abstract
      type
      issueDate
      file
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument {
    onDeleteDocument {
      id
      name
      abstract
      type
      issueDate
      file
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery {
    onCreateGallery {
      id
      name
      photos {
        items {
          id
          name
          file
          createdAt
          updatedAt
          galleryPhotosId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery {
    onUpdateGallery {
      id
      name
      photos {
        items {
          id
          name
          file
          createdAt
          updatedAt
          galleryPhotosId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery {
    onDeleteGallery {
      id
      name
      photos {
        items {
          id
          name
          file
          createdAt
          updatedAt
          galleryPhotosId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
      id
      name
      file
      gallery {
        id
        name
        photos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      galleryPhotosId
    }
  }
`;
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
      id
      name
      file
      gallery {
        id
        name
        photos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      galleryPhotosId
    }
  }
`;
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
      id
      name
      file
      gallery {
        id
        name
        photos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      galleryPhotosId
    }
  }
`;
