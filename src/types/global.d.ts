interface Window {
  instgrm?: {
    Embeds: { process: () => void };
  };
  twttr?: {
    widgets: { load: (el?: Element) => void };
  };
}
