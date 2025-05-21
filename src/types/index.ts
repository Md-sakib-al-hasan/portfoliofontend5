export type allarrayobject = {
    title: string;
    description: string;
  };
  
  export type TProject = {
    _id:string;
    title: string;
    description: string;
    details: string;
    status: string;
    imgurl: string;
    videourl: string;
    frontendLiveLink: string;
    frontendSourceLink: string;
    backendLiveLink?: string;
    backendSourceLink?: string;
    specialFeatured: allarrayobject[];
    Technologies: allarrayobject[];
    featured: allarrayobject[];
    isDelete: boolean;
  };

  export interface TBlog {
    _id:string;
    title: string;
    subject: string;
    description: string;
    imgurl: string;
    videourl: string;
    isDelete: boolean;
  }

  export interface TMessage {
    _id:string;
    name: string;
    email: string;
    description: string;
  }

  export interface TSession
     {
      name?: string | undefined |null
      email?: string | undefined | null ;
      image?: string | null | undefined
    };


export interface TDocument {
   _id:string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
  };
  coverImage: string;
  content: string;
  tags?: string[];
  isPublished: boolean;
  isDelete: boolean;
}


export interface TCourse {
   _id:string;
  name: string;
  provider: string;
  period: string;
  description: string;
}

export interface TEducation {
   _id:string;
  degree: string;
  institution: string;
  year: string;
  description: string;
}



  
  
  
  