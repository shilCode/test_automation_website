const TAGuides = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:text-zinc-100">
      <div className="w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center dark:text-zinc-100">
        <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary mb-6 text-center">Test Automation Resources</h1>
        <div className="space-y-4 w-full text-center">
          <a
            className="block text-primary dark:text-primary underline dark:underline hover:text-accent dark:hover:text-accent transition-colors text-lg"
            href="https://www.reddit.com/r/QualityAssurance/"
            target="_blank" rel="noopener noreferrer"
          >
            r/QualityAssurance
          </a>
          <a
            className="block text-primary dark:text-primary underline dark:underline hover:text-accent dark:hover:text-accent transition-colors text-lg"
            href="https://www.reddit.com/r/QualityAssurance/comments/vgrf40/answering_the_questions_1_how_can_i_get_started/"
            target="_blank" rel="noopener noreferrer"
          >
            How to get started
          </a>
          <a
            className="block text-primary dark:text-primary underline dark:underline hover:text-accent dark:hover:text-accent transition-colors text-lg"
            href="https://www.ministryoftesting.com/"
            target="_blank" rel="noopener noreferrer"
          >
            Ministry of Testing
          </a>
        </div>
      </div>
    </div>
  );
};

export default TAGuides;
