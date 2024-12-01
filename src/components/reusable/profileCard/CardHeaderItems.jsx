import styled from "styled-components";

const defaultImageUrl =
  "https://firebasestorage.googleapis.com/v0/b/odc-liberia.appspot.com/o/images%2Fmusic_default.png?alt=media&token=aee862c8-1dc2-4a2e-b0aa-5fd440d1aadd";

const Hd = styled.header`
  display: grid;
  grid-template-columns: 20rem 1fr;
  align-items: center;
  gap: 2rem;
`;

const Image = styled.img`
  border-radius: 10px;
`;

const DsCont = styled.div`
  /* padding: 0 2rem; */
`;

const Cht = styled.p`
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 6rem;
  /* margin: 2rem 0; */
  text-transform: capitalize;
`;

const Chu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Chui = styled.div`
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border-radius: 50%;
`;
const Chun = styled.div`
  font-weight: bold;
`;

const Dw = styled.p`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export function CardHeaderGrid({ children }) {
  return <Hd>{children}</Hd>;
}

export function CardHeaderImage({ src, alt }) {
  return (
    <div>
      <Image src={src || defaultImageUrl} alt={alt} />
    </div>
  );
}

export function CardHeaderDescription({ children }) {
  return <DsCont>{children}</DsCont>;
}

export function CardHeaderType({ children }) {
  return <Cht>{children}</Cht>;
}

export function CardHeaderTitle({ children }) {
  return <Title>{children}</Title>;
}

export function CardInfoFlex({ children }) {
  return <Dw>{children}</Dw>;
}

export function CardHeaderUserFlex({ children }) {
  return <Chu>{children}</Chu>;
}

export function CardHeaderUserImage({ src, alt }) {
  return (
    <Chui>
      <Image src={src} alt={alt} />
    </Chui>
  );
}

export function CardHeaderUserName({ children }) {
  return <Chun>{children}</Chun>;
}

export function CardHeaderMiscellaneous({ children }) {
  return <span>{children}</span>;
}
