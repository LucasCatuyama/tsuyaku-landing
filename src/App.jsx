import Button from './components/Button';

const App = () => {
  const redirectWhatsapp = () => {
    const phone = import.meta.env.VITE_WHATSAPP_PHONE;
    const message = "Olá! Quero saber mais sobre o Tsuyaku.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
  
    if (isMobile) {
      // Melhor comportamento para celular
      window.location.href = url;
    } else {
      // Abre em nova aba no desktop
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Tsuyaku</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>
      <Button onClick={() => redirectWhatsapp()}>
        Mandar
      </Button>
    </>
  );
};

export default App;
