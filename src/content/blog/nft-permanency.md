---
title: NFT Permanency
author: Kacper Kurteczka
pubDatetime: 2023-05-07T05:21:50Z
postSlug: nft-permanency
featured: true
draft: false
tags:
  - blockchain
  - ethereum
  - polygon
  - solana
  - storage
  - nft
description:
  On-chain vs Off-chain storage of NFTs. What are the differences and which one
  should you choose?
---

Many people believe that NFTs are permanent due to their storage on a blockchain. While this is partially true, a closer look reveals that, for most NFTs, only the token's address is permanent. Essentially, each NFT can be divided into two components: the smart contract and metadata.

The **smart contract** is a program stored on the blockchain that handles the logic of the ERC-721 token. This includes functions such as minting, transferring, and storing the token URI.

On the other hand, **metadata** describes the NFT and typically consists of a JSON file with details such as the name, description, attributes, and image.

While the smart contract is permanent, the metadata is not necessarily so, and the long-term availability of an NFT's metadata depends on its storage location.

## On-chain vs Off-chain

It's clear that smart contracts are stored on the blockchain, but what about the metadata?

While storing metadata on the blockchain would be ideal for long-term preservation, it's not feasible due to two main reasons: cost and speed.

Uploading several megabytes of data onto the blockchain at the time of minting and repeatedly downloading it from the blockchain every time one wants to view the image or metadata would be costly and slow.

Therefore, most NFT metadata is stored off-chain and linked to the token through its URI. This way, the metadata can be easily accessed by anyone with the URI without the need for costly and slow on-chain storage.

## Off-chain storage

There are a few types of off-chain storage:

- Centralized (Amazon S3, Google Cloud Storage or any centralized server)
- Distributed network
  - IPFS
  - Filecoin (NFT.Storage)
  - Storj
  - Arweave
  - Pastel Cascade
  - Bittorrent

### Centralized storage

In the early days of NFTs, centralized hosting was the primary method of storing NFT metadata. This involved storing the metadata on a centralized server, similar to how websites are hosted(like Amazon S3 or Google Cloud Storage). However, this method of storage had several drawbacks, including security concerns and the potential for data loss. Till this day as much as [~70% of NFTs](https://beincrypto.com/lost-nfts-lets-just-admit-it-happens-then-fix-the-problem/) metadata is stored this way.

That means that if something happens to this centralized server the metadata of your token can be lost forever. Your business goes bust, you stop running your servers or stop paying the cloud providers and NFT is gone.

### Distributed network

#### IPFS

When it comes to file sharing and storage, IPFS is a commonly used solution.

**IPFS** stands for InterPlanetary File System and it is a peer-to-peer protocol. However, IPFS has some limitations that may make it less desirable for certain use cases.

One issue with IPFS is that while storage is decentralized, it is not necessarily permanent or secure. There is a risk that your files could be stored on a single node, which would create a single point of failure and potentially compromise the security of your files.

Additionally, IPFS has a **garbage collector** that will remove files after a period of inactivity, unless they are "pinned". **Pinning** is a mechanism that instructs IPFS to keep a file stored on a specific node, which can be either a local node or a pinning service like Pinata. However, both of these options require ongoing effort and investment to ensure that the files remain available. You may need to keep your local node running or pay a pinning service provider indefinitely.

#### Filecoin

To address the limitations of IPFS, a newer solution called **NFT.Storage** has emerged. NFT.Storage utilizes the Filecoin network to ensure permanent and secure storage of files. **Filecoin** is a decentralized storage network that incentivizes users to provide storage space by rewarding them with FIL, the native cryptocurrency of the Filecoin network.

NFT.Storage allows users to upload files and store them on the Filecoin network. Unlike IPFS, files stored on the Filecoin network are guaranteed to be permanently stored, and the network is designed to prevent single points of failure. Additionally, NFT.Storage offers easy integration with popular blockchain platforms, making it a great solution for those looking to store and share files in a decentralized manner.

#### Arweave

**Arweave** is another decentralized blockchain-like storage network that offers a different approach to file storage and sharing compared to IPFS and NFT.Storage.

One of the key differences between Arweave and IPFS/NFT.Storage is their approach to permanent storage. While IPFS and NFT.Storage utilize the Filecoin network to ensure permanent storage, Arweave utilizes a different mechanism called "perpetual storage". Perpetual storage means that files stored on the Arweave network are designed to be stored indefinitely, and users only need to pay a one-time fee to store their files permanently. In contrast, IPFS and NFT.Storage require ongoing payments to maintain storage over time.

Another difference is the consensus mechanism used by each network. Arweave uses a proof-of-stake consensus mechanism called "Silo" to validate transactions and maintain the network. In contrast, IPFS and NFT.Storage do not use a consensus mechanism to validate transactions, as they are primarily focused on file storage and sharing rather than maintaining a blockchain network.

Overall, while Arweave, IPFS, and NFT.Storage all offer decentralized file storage and sharing solutions, the Arweave network focuses mainly on the permanency for stored file.

#### Storj

One of the key differences between Storj and the other networks is that Storj uses a distributed hash table (DHT) to store file metadata and distribute files across the network. This allows for faster retrieval of files and more efficient use of network resources. In contrast, IPFS and Arweave use a content-addressed system, where files are stored and retrieved based on their unique content hashes.

Another difference is in the way that Storj handles storage payments. Storj uses a dual token system, where users pay for storage using Storj tokens (STORJ), but payments are settled in another cryptocurrency such as Bitcoin or Ethereum. In contrast, IPFS and NFT.Storage primarily use a single token system, where payment and storage are managed using the native cryptocurrency of their respective networks.

Finally, Storj offers additional features such as end-to-end encryption and client-side file encryption for added security. This allows users to encrypt their files before uploading them to the network, ensuring that only they can access the data.

#### Pastel Cascade

One of the key differences with Pastel Cascade is its focus on privacy and security. Pastel Cascade uses a privacy-focused consensus mechanism called Proof-of-Work with RandomX hashing algorithm, which is designed to be ASIC-resistant and prevent centralization of mining power. Additionally, Pastel Cascade offers client-side encryption for files uploaded to the network, ensuring that only the owner has access to the data.

Another unique feature of Pastel Cascade is its use of a content-addressable system based on a new hashing algorithm called "Merkle tree hash". This system is designed to be more efficient and scalable compared to traditional content-addressable systems like IPFS and Arweave.

Finally, Pastel Cascade offers a rewards system for users who contribute storage space and bandwidth to the network. Users who participate in the network can earn PSL tokens, which can be used for various purposes within the ecosystem.

## Which one should I choose?

1. IPFS: Ideal for storing and sharing files that do not require long-term storage. This solution is useful for sharing files like images, web pages, and small videos.
2. NFT.Storage: Ideal for storing unique digital assets that require protection and proof of ownership. This solution is useful for storing files like non-fungible tokens, digital art, and collectibles.
3. Arweave: Ideal for storing files that require long-term storage with high levels of permanence and security. This solution is useful for storing files like research data, important documents, and digital art.
4. Storj: Ideal for storing large amounts of data securely and cost-effectively. This solution is useful for storing files like backups, archives, and logs.
5. Pastel Cascade: Ideal for storing large files with high levels of privacy and security. This solution is useful for storing files like confidential documents, private photos, and sensitive financial data.

## Comparison to BitTorrent

BitTorrent is a peer-to-peer (P2P) protocol primarily used for sharing large files over the internet. While it does share some similarities with decentralized storage networks like IPFS, Arweave, Storj, NFT.Storage, and Pastel Cascade, there are several key differences between BitTorrent and these networks.

One of the main differences is that BitTorrent is designed for file sharing, whereas decentralized storage networks are designed for file storage and sharing. BitTorrent allows users to download and upload files from other peers on the network, but it does not offer long-term file storage. Decentralized storage networks, on the other hand, allow users to store files on the network for extended periods of time and retrieve them at any time.

Another difference is in the way that files are stored and accessed. BitTorrent breaks large files into smaller pieces and distributes them across the network. When a user wants to download a file, they must first locate all of the pieces from different peers on the network and reassemble them into the original file. Decentralized storage networks typically store files as whole objects and use content-addressed systems to retrieve them based on their unique content hashes.

Additionally, BitTorrent does not have a built-in system for incentivizing storage and bandwidth contribution. In contrast, decentralized storage networks often use token-based incentive mechanisms to encourage users to contribute storage space and bandwidth to the network.

Overall, while BitTorrent and decentralized storage networks share some similarities, they are designed for different purposes and have different architectures and mechanisms for storing and accessing files, as well as incentivizing network participation.

Sources:

[https://beincrypto.com/lost-nfts-lets-just-admit-it-happens-then-fix-the-problem/](https://beincrypto.com/lost-nfts-lets-just-admit-it-happens-then-fix-the-problem/)

[https://pastel.network/on-chain-vs-off-chain-nfts-explained/](https://pastel.network/on-chain-vs-off-chain-nfts-explained/)

[https://decrypt.co/resources/how-are-nfts-stored-on-chain-off-chain-and-decentralized-storage](https://decrypt.co/resources/how-are-nfts-stored-on-chain-off-chain-and-decentralized-storage)
