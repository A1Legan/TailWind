export default function Home() {
  return (
    <div>
      <h1 className="ml-auto mr-auto text-center text-7xl">Главная</h1>
      <div className="flex gap-4 place-content-between max-w-50 items-center ml-auto mr-auto">
        <a href="/catalog">Каталог</a>
        <a href="/contacts">Контакты</a>
      </div>
    </div>
  );
}
