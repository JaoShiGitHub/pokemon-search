function NotFound(message) {
  return (
    <section className="bg-[#1E1E1E] shadow-xl mb-40 py-12 rounded-[36px] text-white flex max-w-4xl w-full  justify-center items-center">
      {message.resultMessage}
    </section>
  );
}

export default NotFound;
