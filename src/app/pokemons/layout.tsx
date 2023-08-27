type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <main>
      <h1>ポケモンだお</h1>
      {children}
    </main>
  );
}
