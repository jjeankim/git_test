import s from "./page.module.scss";

export default function Home() {
  return (
    <div className={s.page}>
     <p className={s.text3xl}>3xl</p>
     <p className={s.two}>2xl</p>
     <p className={s.one}>xl</p>
     <p className={s.twoLg}>2lg</p>
     <p className={s.lg}>lg</p>
     <p className={s.md}>md</p>
     <p className={s.sm}>md</p>
     <p className={s.xs}>xs</p>
    </div>
  );
}
