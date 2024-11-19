import profile from "../assets/images/blog/ganapathi _profile.jpg";
import ShareButtons from "../components/sharebuttons/ShareButtons";
import type2 from "../assets/images/blog/type2_rag.png";
import type2_img1 from "../assets/images/blog/type2_image1.png";
import type2_img2 from "../assets/images/blog/type2_image2.png";
import type2_img3 from "../assets/images/blog/type2_image3.png";
import type2_img4 from "../assets/images/blog/type2_image4.png";
import type2_img5 from "../assets/images/blog/type2_image5.png";
import type2_img6 from "../assets/images/blog/type2_image6.png";

const BlogDetails4 = () => {
  return (
    <div className="text-justify border-red-400 dark:bg-secondary px-4 sm:px-8">
      <div className="text-center py-5">
        <h3 className="text-secondary text-3xl font-bold dark:text-background">
          Blog Posts
        </h3>
        <div className="mt-2 mb-5">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">Blog Posts</span>
        </div>

        <section className="pt-5 pb-10 lg:pt-2 lg:pb-15 dark:bg-secondary">
          <div className="container">
            {/* Header Section */}

            <div className="row justify-center mb-5">
              <div className="lg:w-full">
                <h2 className="text-black dark:text-secondary-dark font-medium mb-0 text-center">
                  Types of RAG Part-2
                </h2>
              </div>
            </div>
            {/* Main Image */}
            <div className="relative aspect-[21/9] rounded-4 overflow-hidden">
              <img
                src={type2}
                alt="RAG AI Image"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="row justify-center mt-8">
              <div className="lg:w-8/12 mx-auto">
                <div>
                  {/* Author and Meta Info */}
                  <div className="flex flex-wrap justify-between items-center mb-6 gap-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={profile}
                        alt="Author"
                        className="w-8 h-8 object-cover rounded-full"
                      />
                      <p className="font-medium mb-0 text-black dark:text-secondary-dark">
                        <a href="#">Ganapathy Shankar</a>
                      </p>
                    </div>

                    <ul className="list-none flex items-center text-sm space-x-4 text-black dark:text-secondary-dark">
                      <li>Thu Nov 14 2024</li>
                      <li>5 Min. Read</li>
                    </ul>
                  </div>

                  {/* Blog Content */}
                  <h4 className="text-black dark:text-secondary-dark font-medium mb-5 text-justify text-2xl">
                    Unpacking the Next 6 Techniques in Retrieval-Augmented
                    Generation
                  </h4>
                  <p className="font-medium mb-5 text-justify text-black dark:text-secondary-dark space-y-6">
                    Welcome back to our RAG series! In Part 1, we introduced you
                    to the fundamentals of Retrieval-Augmented Generation (RAG)
                    and explored six foundational RAG techniques. Now, in Part
                    2, we’re delving into six more advanced RAG classifications
                    that build on the foundation we’ve covered. These techniques
                    push the boundaries of RAG with innovations in structured
                    knowledge, dynamic adaptation, and iterative feedback. Lets
                    dive into the next set of RAG techniques and see how each
                    one transforms information retrieval in unique ways!
                  </p>
                  <article className="blog-post  font-medium mb-0 text-justify text-black dark:text-secondary-dark space-y-6">
                    <h4>
                      The Next 6 RAG Techniques: Advanced Approaches for Complex
                      Needs{" "}
                    </h4>
                    <p>
                      These six techniques bring even more precision,
                      adaptability, and power to RAG systems, each with
                      specialized mechanisms for retrieving and refining
                      information in real-time applications.
                    </p>

                    <h4> 1. Graph RAG </h4>
                    <p>
                      Graph RAG combines knowledge graphs with
                      retrieval-augmented generation to enable structured
                      information retrieval. This technique constructs a
                      knowledge graph on-the-fly during retrieval, linking
                      relevant entities and relationships. By providing language
                      models with these structured subgraphs, Graph RAG enhances
                      response accuracy and context relevance, making it
                      particularly useful for applications in fields with
                      complex data, such as healthcare and finance.
                    </p>

                    <div className="relative rounded-4 overflow-hidden w-130 h-120">
                      <img src={type2_img1} alt="Article Image" className="" />
                    </div>

                    <h5>Key Features: </h5>
                    <ul className="list-disc ml-5">
                      <li>
                        {" "}
                        Dynamic knowledge graph construction during retrieval.{" "}
                      </li>
                      <li>Entity linking for structured responses. </li>
                      <li>
                        Enhanced accuracy and relevance through graph-based
                        grounding.{" "}
                      </li>
                      <b>Best for: </b> Intelligent chatbots in healthcare or
                      finance that need to handle complex, structured data
                      accurately.
                    </ul>

                    <h4>2. Adaptive RAG </h4>
                    <p>
                      Adaptive RAG is designed to make real-time decisions about
                      when to rely on internal model knowledge versus retrieving
                      external data. This technique uses confidence scores to
                      assess the necessity of retrieval and includes an “honesty
                      probe” to reduce hallucinations, ensuring responses are
                      grounded in the model’s actual knowledge. Adaptive RAG’s
                      dynamic balancing reduces unnecessary retrievals,
                      improving both efficiency and accuracy.
                    </p>
                    <div className="relative rounded-4 overflow-hidden w-130 h-120">
                      <img src={type2_img2} alt="Article Image" className="" />
                    </div>
                    <h5> Key Features: </h5>

                    <ul className="list-disc ml-5">
                      <li>
                        Dynamic balancing of internal and external knowledge
                        retrieval.{" "}
                      </li>
                      <li>
                        Confidence scoring and honesty probing for accuracy{" "}
                      </li>
                      <li>
                        Efficiency-focused by minimizing redundant retrievals.{" "}
                      </li>
                      <b>Best for:</b> Applications like real-time support
                      systems where maintaining factual reliability is key.
                    </ul>

                    <h4>3. REALM (Retrieval-Augmented Language Model) </h4>
                    <p>
                      REALM is a retrieval-augmented language model that
                      retrieves relevant documents from large datasets, such as
                      Wikipedia, to support model predictions. It uses masked
                      language modeling for training, optimizing retrieval for
                      better prediction accuracy. REALM employs Maximum Inner
                      Product Search to efficiently find relevant documents
                      among millions of candidates, making it highly effective
                      for open-domain question-answering tasks.
                    </p>

                    <div className="relative rounded-4 overflow-hidden w-130 h-120">
                      <img src={type2_img3} alt="Article Image" className="" />
                    </div>

                    <h5>Key Features: </h5>
                    <ul className="list-disc ml-5">
                      <li> Document retrieval from extensive data sources. </li>
                      <li>
                        Trained with masked language modeling for improved
                        accuracy.{" "}
                      </li>
                      <li>
                        Efficient document search through Maximum Inner Product
                        Search.{" "}
                      </li>
                      <b>Best for:</b> Open-domain question answering where
                      accuracy from extensive datasets is critical.
                    </ul>

                    <h4>
                      {" "}
                      4. RAPTOR (Recursive Abstractive Processing for
                      Tree-Organized Retrieval){" "}
                    </h4>
                    <p>
                      RAPTOR organizes information into a hierarchical tree
                      structure by clustering and summarizing text at multiple
                      levels. This approach enables RAPTOR to retrieve responses
                      at varying degrees of abstraction, allowing for both broad
                      overviews and specific details. RAPTOR’s tree structure is
                      ideal for handling complex question-answering tasks that
                      require layered, in-depth responses.
                    </p>
                    <div className="relative rounded-4 overflow-hidden w-130 h-120">
                      <img src={type2_img4} alt="Article Image" className="" />
                    </div>

                    <h5>Key Features: </h5>
                    <ul className="list-disc ml-5">
                      <li>
                        Hierarchical tree structure for multi-level information
                        retrieval.{" "}
                      </li>
                      <li>
                        Broad-to-specific retrieval, combining high-level themes
                        with detailed data.{" "}
                      </li>
                      <li>
                        Flexible navigation through tree traversal and collapsed
                        views.{" "}
                      </li>
                      <b>Best for: </b>Advanced research tools needing in-depth,
                      layered responses.
                    </ul>

                    <h4> 5. REFEED (Retrieval Feedback) </h4>
                    <p>
                      REFEED enhances model responses by iteratively refining
                      initial outputs based on retrieved feedback, without
                      needing to fine-tune the model. This approach retrieves
                      additional relevant documents to improve response quality
                      and generates multiple answers, which are then ranked to
                      select the most accurate. REFEED’s feedback mechanism
                      provides continuous improvement, adapting responses to new
                      information.
                    </p>
                    <div className="relative rounded-4 overflow-hidden w-130 h-120">
                      <img src={type2_img5} alt="Article Image" className="" />
                    </div>
                    <h5>Key Features: </h5>
                    <ul className="list-disc ml-5">
                      <li>
                        Feedback-driven refinement without model fine-tuning.{" "}
                      </li>
                      <li>
                        Multiple answer generation for improved retrieval
                        accuracy.
                      </li>
                      <li>
                        Ranking system that selects the best response based on
                        feedback.{" "}
                      </li>
                      <b>Best for:</b> Applications that benefit from evolving
                      responses, like news summarization or content
                      recommendation systems.
                    </ul>

                    <h4> 6. Iterative RAG </h4>
                    <p>
                      Iterative RAG refines its retrieval process through
                      multiple retrieval steps, adjusting each search based on
                      feedback from previously selected documents. This
                      multi-step approach uses a Markov decision process and
                      reinforcement learning to improve retrieval accuracy over
                      time. By maintaining an internal state, Iterative RAG
                      optimizes future retrieval steps based on accumulated
                      knowledge from prior iterations.
                    </p>

                    <div className="relative rounded-4 overflow-hidden w-130 h-120">
                      <img src={type2_img6} alt="Article Image" className="" />
                    </div>
                    <h5>Key Features: </h5>
                    <ul className="list-disc ml-5">
                      <li> Multi-step retrieval process based on feedback. </li>
                      <li>
                        Reinforcement learning for improved retrieval
                        decision-making.{" "}
                      </li>
                      <li>
                        Internal state tracking for ongoing retrieval
                        optimization.{" "}
                      </li>
                      <b> Best for:</b> Highly dynamic environments like
                      real-time data analysis, where ongoing adjustments are
                      crucial.
                    </ul>

                    <h4> Wrapping Up Part 2 </h4>
                    <p>
                      With these six advanced techniques, RAG systems can go
                      beyond standard retrieval processes, dynamically adapting
                      and refining their outputs. Each method offers unique
                      capabilities tailored to specific scenarios, from handling
                      large data sources to retrieving structured, hierarchical
                      information. Stay tuned for <b>Part 3,</b> where we’ll
                      explore the final set of innovative RAG techniques. These
                      will cover even more advanced classifications, providing a
                      comprehensive toolkit for any RAG-based application!
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ShareButtons />
      </div>
    </div>
  );
};

export default BlogDetails4;
