export const VERSION = "2021-06-28";

const exitNotSupported = () => {
    console.error(chalk.red(`${os.platform()} ${os.arch()} is currently not supported.`));
    process.exit(1);
};

export const getDownloadUrl = () => {
    const target = (() => {
        switch (os.platform()) {
            case "win32": {
                switch (os.arch()) {
                    case "arm64":
                        return "rust-analyzer-aarch64-pc-windows-msvc.gz";
                    case "x64":
                        return "rust-analyzer-x86_64-pc-windows-msvc.gz";
                    default:
                        return exitNotSupported();
                }
            }
            case "darwin":
                switch (os.arch()) {
                    case "arm64":
                        return "rust-analyzer-aarch64-apple-darwin.gz";
                    case "x64":
                        return "rust-analyzer-x86_64-apple-darwin.gz";
                    default:
                        return exitNotSupported();
                }
            default:
                switch (os.arch()) {
                    case "arm64":
                        return "rust-analyzer-aarch64-unknown-linux-gnu.gz";
                    default:
                        return "rust-analyzer-x86_64-unknown-linux-gnu.gz";
                }
        }
    })();

    return `https://github.com/rust-analyzer/rust-analyzer/releases/download/${VERSION}/${target}`;
};