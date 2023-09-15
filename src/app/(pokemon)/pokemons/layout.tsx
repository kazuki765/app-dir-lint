type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
export default function Layout({ children, modal }: Props) {
  return (
    <main>
      <h1>ポケモンだお</h1>
      {children}
    </main>
  );
}
