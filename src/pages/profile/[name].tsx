import * as React from "react";
import { request } from "../../lib/datocms";

interface ProfileDataProps {
  profile: ProfileProps;
}

interface ProfileProps {
  name: string;
  jobs: string;
  projects: string;
  references: string;
  location: string;
  description: string;
  techStack?: string;
  imagename?: string;
}

const Profile: React.FC<ProfileDataProps> = ({
  profile: {
    name: fullName,
    jobs,
    projects,
    references,
    location,
    description,
    imagename,
    techStack,
  },
}) => {
  return (
    <main className="profile-page">
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px", transform: "translateZ(0)" }}
        ></div>
      </section>
      <section className="relative py-2 md:py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="Profile image"
                      src={`/images/${imagename}.jpg`}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 flex justify-center px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-blue-400 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{
                        transition: "all .15s ease",
                      }}
                    >
                      Hire me
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {projects}
                      </span>
                      <span className="text-sm text-gray-500">Projects</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {jobs}
                      </span>
                      <span className="text-sm text-gray-500">Jobs</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {references}
                      </span>
                      <span className="text-sm text-gray-500">References</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {fullName}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  {location}
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  {techStack}
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;

const DETAIL_QUERY = `query DetailQuery($pattern: String!) {
  profile(filter: {name: {matches: {pattern: $pattern}}}) {
    description
    id
    jobs
    location
    references
    projects
    description
    techstack
    imagename
    name
  }
}`;

export async function getStaticProps(context) {
  const data = await request({
    query: DETAIL_QUERY,
    variables: { pattern: context.params.name },
    preview: false,
  });

  return {
    props: { profile: data.profile },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "boris" } },
      { params: { name: "vera" } }, // See the "paths" section below
    ],
    fallback: false,
  };
}
