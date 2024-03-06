import PaywallLogin from "./PaywallLogin.component";

export interface PostBodyProps {
  paywallEnabled: boolean;
}

export default function PostBody({ paywallEnabled }: PostBodyProps) {
  return (
    <>
      <div className="prose prose-lg md:prose-normal container mx-auto mt-10 max-w-3xl px-5 font-serif">
        <figure>
          <img
            src="https://miro.medium.com/v2/resize:fit:2000/format:webp/0*FEP16gXObxcHgiVz.jpg"
            className="w-full"
          />
          <figcaption>Dune promotional picture from UHD Wallpapers</figcaption>
        </figure>
        <h2>Moral Uncertainty — What is the Good?</h2>
        <p>
          {" "}
          In 1953, a journalist by the name of Frank Herbert traveled to
          Florence, Oregon to write an article about the coastal dunes that had
          become a big tourist destination and a site of a long-standing
          environmental struggle.
        </p>
        <p>
          The Oregon Dunes span over 30,000 acres and still attract over a
          million and a half tourists to this day. But long before Herbert was a
          journalist and before environmental issues were everywhere in the
          news, the coastal communities in the 1920s were struggling with the
          impact and movement of these dunes.
        </p>
        <p>
          High coastal winds shifted the dunes constantly, swallowing roads,
          railroad tracks, homes, and more. To combat this constantly shifting
          landscape, the US Department of Agriculture planted European Beach
          Grass in hopes of stabilizing the dunes.
        </p>
        <p>
          Although the grass worked in some areas there simply wasn’t enough to
          cover the huge footprints of the dunes — the type you’d expect to see
          in African deserts.
        </p>
        <p>
          In the areas where the grass was working, a new problem arose: the
          grass itself was an invasive species and soon the area was overgrown
          and the landscape shifted.
        </p>
        <p>
          Over a few decades, parts of the dunes that were once used for
          sledding and recreation were covered in forest. The grass had not only
          stabilized some areas, but had allowed other plant life to grow.
        </p>
        <p>
          This struggle between man and nature — the effort to form something as
          wild as a landscape into a stable environment to build on — would be
          the foundation for Herbert’s debut novel, Dune.
        </p>
        <blockquote>
          “These waves can be every bit as devastating as a tidal wave in
          property damage.” - Frank Herbert
        </blockquote>{" "}
        <div className="relative">
          {paywallEnabled && (
            <div className="absolute inset-0 z-10 h-full bg-gradient-to-b from-transparent to-white"></div>
          )}
          <p>
            This struggle between man and nature — the effort to form something
            as wild as a landscape into a stable environment to build on — would
            be the foundation for Herbert’s debut novel, Dune. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Beatae aperiam numquam
            voluptas dolorem sint provident est quae veniam, amet ab a rerum,
            adipisci quasi quis magni expedita? Laborum, omnis aperiam.
          </p>
        </div>
      </div>
      {paywallEnabled && <PaywallLogin />}
    </>
  );
}
