import React from 'react';

const PostDetails = () => {
  return (
    <div>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="md:items-center">
            <div className="w-full h-64 lg:h-96">
              <img
                className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                src="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg"
                alt="Post Blog"
              />
            </div>
            <div className="">
              <hr className="my-12" />
              <div className="mt-2">
                <h1 className="text-gray-800 text-lg" htmlFor="count">
                  Where does it come from?
                </h1>
                <div className="flex items-center mt-1">
                  <p className="text-gray-600 text-lg mx-2">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                    Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard
                    chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
                    and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                    original form, accompanied by English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostDetails;
