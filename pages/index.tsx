import Container from "@mui/material/Container";
import NavBar from "../src/components/NavBar";
import Header from "../src/components/Header";
import Box from '@mui/material/Box';
import ContextProvider from '../store/ContextProvider'
import { AppProps } from 'next/app';


const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextProvider>
      <Box
        sx={{ 
          backgroundImage:`url(../../background.jpg)`,
          backgroundSize:'cover',
        }}
      >
        <NavBar />
        <Header />
      </Box>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum atque. Quasi reiciendis doloribus debitis dolores temporibus architecto voluptas porro delectus esse repellendus aliquid adipisci ipsa quaerat, asperiores, nihil maxime.
        Possimus maiores perferendis totam itaque reiciendis corporis, placeat laboriosam nisi eaque, enim omnis vel dicta. Assumenda, facilis tempora,i illum temporibus commodi numquam fugiat quisquam neque expedita quam error totam iusto adipisci ullam. Eius quibusdam fugit animi sunt!
        Beatae inventore hic dignissimos, labore saepe omnis doloribus sed eligendi reiciendis id ducimus non consequuntur alias sequi ipsum corrupti harum dolorem corporis eum nihil sint officiis voluptas! Sint, magni error.
        Neque deserunt nihil aspernatur officia aliquam illum repellat repellendus, magnam eligendi cumque voluptates! Perspiciatis, quaerat fugit nostrum ex non similique totam voluptas, veniam ipsam obcaecati illo consequuntur quidem, qui velit.
        Velit sit provident modi sint quam omnis enim doloribus corrupti assumenda beatae alias dolores quidem fuga, aperiam explicabo deserunt voluptatum voluptatibus ex reiciendis, accusamus ipsam? Suscipit asperiores eum porro! Fuga.
        Excepturi rem, eum optio ipsa facere ipsum dolorem? Ea excepturi incidunt, vero tempore dolores quod dolor aliquid voluptatem, inventore culpa ullam dolorum facere saepe totam quas eum perspiciatis veniam ipsa.
        Quisquam, eaque esse quam aliquam dolores odio aperiam eum porro mollitia voluptates repellendus nobis labore? Blanditiis saepe molestiae, doloribus ducimus ea, quibusdam harum maiores, hic laboriosam inventore nam recusandae numquam!
        A, deleniti ex labore nemo dolorem minima nihil, cum accusamus iure, perferendis nesciunt odit minus beatae! Vero, beatae labore ab dignissimos libero unde quaerat facere molestiae placeat obcaecati, aperiam architecto.
        Quidem, velit dicta, ea temporibus omnis distinctio obcaecati laudantium, quisquam tenetur ut consectetur perspiciatis assumenda totam impedit! Laboriosam exercitationem excepturi itaque expedita, voluptas quisquam fuga quia non! Dolorem, exercitationem ea.
        Ab, repellat sit. Voluptas quas officia autem ut pariatur, quis aperiam cum, debitis, quia non ex eos dolorem nisi odio veritatis des.
        s cumque dicta dolorum!
        Quia iste aliquam ex dolore dolorum! Soluta omnis quaerat, sint nostrum incidunt dolorum, natus ipsam at, eaque architecto voluptates illo tempore. Reiciendis neque optio delectus voluptas blanditiis quaerat doloribus omnis!
        Sapiente maxime aspernatur odit aut placeat cupiditate voluptatem, similique inventore esse, delectus laboriosam repudiandae deserunt iste hic a facilis eius sunt! Error necessitatibus vel consectetur reiciendis modi delectus velit fugiat?
        Est, ex qui dolores distinctio tempore voluptas itaque natus enim, laudantium officia, accusantium omnis eos vel assumenda laborum asperiores dolore. Expedita, laboriosam ea quo magnam error vel accusamus vitae nesciunt.
        Perferendis non vero officiis tenetur. Pariatur repellat eos nostrum officiis itaque necessitatibus tempore, hic corrupti neque dolore iure obcaecati consequuntur iusto blanditiis at saepe modi illo dicta! Obcaecati, tempora molestiae.
        Quae laboriosam nisi doloremque adipisci tempora porro labore incidunt, fuga nam delectus suscipit, accusantium quam esse debitis facilis repellat voluptatibus amet, aliquam necessitatibus quia asperiores error distinctio officia minus. Impedit!
        Ullam blanditiis earum neque repellendus alias nisi quaerat ipsam molestiae voluptatum aspernatur nostrum eveniet quidem deserunt doloremque, facere eum vero omnis aliquam totam! Quibusdam delectus iure facilis beatae eius illo?
        Enim quam ipsam veritatis aperiam quae eum id dolores fugiat temporibus in unde ipsum quisquam, magnam beatae? Blanditiis ab eum neque illo praesentium, voluptatem, sed, quis consequuntur mollitia ipsam minus.
        Ab nostrum unde perferendis nam rem dolorum maiores labore, nemo tenetur eius, numquam aspernatur facilis. Ratione non dolorum, eos temporibus, laudantium mollitia, quo est nisi vel cupiditate pariatur culpa modi!
        Reiciendis perspiciatis dolorum rerum ullam nihil fuga error eum esse fugiat! Deserunt eius libero quis, nam minima quod dicta consectetur molestiae odio nisi, magni a numquam quibusdam iusto! Necessitatibus, tempora?
        Laborum totam ab fugiat veniam voluptas tempore quae deleniti, praesentium eum magnam, at, quas repellendus. Laudantium cupiditate possimus numquam suscipit reiciendis consectetur. Tempore aspernatur neque iure cumque repellat ducimus dolorem?
        Quisquam, facere, voluptatum aspernatur ullam porro explicabo repellat ut impedit nobis quo magni ea. Laborum commodi quae perferendis illum voluptatem voluptate praesentium excepturi, nesciunt doloribus debitis veniam error, exercitationem doloremque.
        At consequatur ratione sed soluta corporis qui et, distinctio eveniet fuga atque accusamus maiores consectetur aperiam explicabo voluptatibus temporibus. Saepe mollitia ipsum ex iste neque. Perspiciatis molestiae ea nihil explicabo.
        Iste quis numquam quo saepe ab officiis aspernatur recusandae aperiam consequuntur nulla totam id amet, at soluta tenetur exercitationem molestiae minus corrupti odit consequatur porro, quidem autem ullam neque. Voluptas!
        Magni culpa fugit mollitia harum dolore distinctio asperiores placeat, esse vel corrupti hic et a rem labore! Incidunt, optio eveniet officia rerum exercitationem voluptatem, placeat architecto dolor quos excepturi quo!
        Reiciendis exercitationem placeat architecto consectetur, tempora fugiat numquam vel dignissimos deleniti unde accusamus dolor eaque at maxime quod repudiandae non quas, asperiores voluptas repellat. Quidem rerum ea commodi quaerat quod.
        Repellendus doloribus ex, rem perferendis ipsum quod facilis optio quae consequuntur cum ducimus possimus, quam nobis est nisi repudiandae a natus harum deserunt eum. Voluptatum fuga itaque ullam distinctio nisi?
        Minus harum vel voluptas unde amet, facilis voluptates dolore! Laudantium maiores ut sequi recusandae totam error omnis, nostrum cum veritatis et sed accusantium, quisquam fugiat similique deleniti voluptatem minus laborum.
        Provident cumque rerum iusto quibusdam, fugiat et exercitationem odit ea fuga esse molestias sequi repudiandae, dolorem nobis magnam hic numquam dolorum, vel ad modi. Velit qui iure mollitia illum delectus.
        Nihil exercitationem velit, distinctio placeat sequi aspernatur iusto eum minus repellendus quasi! Nostrum dolore temporibus quisquam. Nihil explicabo inventore hic soluta et. Fuga praesentium quidem harum id nostrum voluptate consequatur.
        Excepturi dolorum minima iusto, ipsa molestias ipsum. Soluta delectus laudantium dolor ab ipsum accusantium iste tempora vitae, accusamus magni harum ratione consequuntur rerum explicabo ut aliquid facilis hic, molestias sunt!
        Enim, debitis doloribus doloremque facere, est earum tenetur delectus magnam omnis, dignissimos architecto perspiciatis temporibus! Ratione aliquid voluptatum ab, corrupti vero rerum harum soluta nisi doloremque, obcaecati, perferendis aut quia!
        Dolor laboriosam, perferendis nulla incidunt perspiciatis voluptate dolorem nam minus repellendus laudantium ipsam repellat sed alias iure praesentium recusandae harum minima nemo nobis architecto. Distinctio totam ea facere mollitia architecto!
        Sequi fugit amet eaque. Eaque, doloremque officiis. Praesentium neque similique exercitationem, quasi, magni dignissimos natus excepturi necessitatibus reprehenderit dolores dolorem corporis quibusdam provident molestias iste quidem ex? Sit, non eligendi.
        Maxime dolorem officia vel odit in ut, recusandae nulla veniam suscipit obcaecati impedit vitae optio sed qui ex ratione iure ipsum facilis quod dolores corrupti quis numquam. Nam, neque et.
        Alias, temporibus obcaecati! Illo, repellat voluptatem maxime officia aliquam excepturi laboriosam soluta! Velit consequatur, nemo ea eum officia ut libero eos a! Doloremque perspiciatis quia ad quis reiciendis iure vero.
        Adipisci, similique. Esse ab hic, libero id amet dolores. Eius in corrupti harum asperiores fugit, fuga voluptatum exercitationem quo ea ad, ab quas dolores! Quod eius voluptas tempore dolore libero.
        Iure, in tenetur animi dolor iste voluptatem, maxime incidunt ad mollitia quaerat exercitationem fugiat vel tempora dolorum nihil saepe nam voluptate aut corrupti illum unde eos voluptas? Labore, amet quasi?
        Repudiandae distinctio alias maxime dolorum veritatis temporibus praesentium, officiis blanditiis minus eligendi iure nobis minima consequuntur unde aperiam quod nam adipisci recusandae facere, enim, beatae maiores! Distinctio aperiam quidem vitae!
        Facilis, error? Maiores quas tempora aliquid itaque illo adipisci accusamus possimus aliquam dolorum veniam! Itaque ab nostrum voluptatem dolores expedita iure quod sunt at deleniti, explicabo perspiciatis sed nulla esse.
        Qui harum dolore obcaecati! Iusto aliquam molestias nesciunt vitae asperiores libero inventore excepturi natus molestiae modi optio, commodi explicabo? Sed eligendi minus doloremque illum possimus laudantium ipsam odit? Pariatur, harum.
        Ullam molestias, repudiandae dignissimos repellendus ad accusamus non nemo cumque laborum aut voluptate ratione architecto facilis, quo rem! Sint quos nihil, aliquam accusamus aliquid id voluptas impedit ducimus deserunt assumenda!
        Saepe aperiam, beatae omnis, nostrum est natus delectus accusamus excepturi sint sequi adipisci odio commodi consequatur quia ducimus quam dolore. Nam beatae mollitia velit repellat culpa ipsa deleniti, qui veniam.
        Dolores nam vel, aut nemo sunt dicta cupiditate commodi soluta quasi obcaecati eum sed porro libero aliquid labore rerum, adipisci onem recusandae illo. Facere dolor sapiente culpa debitis quibusdam dignissimos odio! Aliquid, adipisci nulla repudiandae deserunt est voluptas mollitia!
        Eius facere ducimus consequuntur veritatis, expedita iusto. Ratione quia placeat expedita magni tempora. Error sequi quos nostrum itaque cupiditate illum consequatur, obcaecati molestiae esse doloribus quisquam sapiente, veritatis nemo quae?
        Laborum maxime odio earum autem aliquid quam itaque veritatis cumque, qui aperiam delectus non, quae omnis cupiditate laboriosam, facilis voluptatum quaerat molestiae dolore repudiandae minima. Fugiat at debitis esse architecto.
        Cu maxime exercitationem in hic beatae doloribus veritatis earum deserunt quia possimus, harum illum officia! Culpa, quo.
        Cumque eveniet, a, ad autem, ducimus neque excepturi distinctio consectetur architecto odio odit sed facilis natus. Dolores nobis, quod aspernatur, itaque nihil nam, aliquid incidunt velit maiores vero sapiente facilis!</p>
      </div>
    </ContextProvider>
    
  );
};

export default Home;
