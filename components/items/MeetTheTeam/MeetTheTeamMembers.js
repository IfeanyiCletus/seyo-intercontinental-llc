import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  useColorScheme,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedView from '../ThemedView';
import ThemedText from '../ThemedText';
import MembersView from './MembersView';

const windowWidth = Dimensions.get('window').width;

export default function MeetTheTeamMembers(props) {
  const theme = useColorScheme();
  const [showTeam1, setShowTeam1] = useState(false);
  const [showTeam2, setShowTeam2] = useState(false);
  const [showTeam3, setShowTeam3] = useState(false);
  const [showTeam4, setShowTeam4] = useState(false);
  const [showTeam5, setShowTeam5] = useState(false);

  let View2 = theme === 'dark' ? ThemedView : ImageBackground;
  let View3 = theme === 'dark' ? ThemedView : View;

  return (
    <View2
      source={require('../../../assets/images/screen1440/gradient-5.png')}
      style={[
        styles.container,
        showTeam1 || showTeam2 || showTeam3 || showTeam4 || showTeam5
          ? { height: windowWidth > 1280 ? 3400 : 3350 }
          : { height: windowWidth > 1280 ? 2700 : 2500 },
      ]}
    >
      <ThemedText style={styles.text}>
        Experience. Expertise. Excellence
      </ThemedText>
      <View style={styles.border}></View>
      <View3 style={{ width: '50%', marginBottom: 30 }}>
        <ThemedText style={styles.text1}>
          Our team brings together decades of combined experience across
          entrepreneurship, enterprise development, finance, trade policy, and
          academic excellence. Each member has been carefully selected for their
          proven track record of helping businesses and professionals achieve
          sustainable growth and success.
        </ThemedText>
      </View3>
      <View3 style={{ flexDirection: 'row', marginBottom: 20 }}>
        <MembersView
          image={require('../../../assets/images/teamMembers/team1.png')}
          name={'Aliyu Bello Usman'}
          title={'Chief Executive Officer'}
          position={'Founder & Chief Architect – ACCESS MENTOR Platform'}
          text1={`Aliyu Bello Usman is a seasoned enterprise development expert, policy analyst, project strategist and business systems designer with over 15 years of progressive experience spanning public-sector enterprise development, procurement system, entrepreneurship empowerment and private-sector consultancy.`}
          showFull={showTeam1}
          text2={`As CEO of SEYO Intercontinental LLC, Mr. Usman provides overall strategic leadership, corporate governance oversight, and innovative direction for the company's global operations. He is responsible for corporate strategy formulation and execution, international business development and partnerships, policy advisory and enterprise support solutions, and oversight of digital platforms, consulting services and training programmes.`}
          text3={`As Founder and Chief Architect of ACCESS MENTOR, he conceived, designed and structured the platform's end-to-end operational model including Business Clinic, mentor engagement system, revenue-sharing structure and technology-enabled service delivery architecture.`}
          expertise1={`• Policy development and review for public and private sector clients`}
          expertise2={`• Business strategy development and opportunity identification`}
          expertise3={`• Enterprise set-up advisory`}
          expertise4={`• Business plan and proposal development for start-ups and institutions`}
          achievement1={`• UNIDO HP-LIFE Entrepreneurship Training (Train-the-Trainers)`}
          achievement2={`• JICA programmes on SME Development and OVOP`}
          achievement3={`• Business Research Methodology & Data Analysis (EDI India)`}
          achievement4={`• Multiple certifications in public procurement, bid evaluation and financial management`}
          onPress={() => {
            if (showTeam1) {
              setShowTeam1(false);
            } else {
              setShowTeam1(true);
            }
            setShowTeam2(false);
            setShowTeam3(false);
            setShowTeam4(false);
            setShowTeam5(false);
          }}
        />
        <MembersView
          image={require('../../../assets/images/teamMembers/team2.png')}
          name={`Dr. Bashir Sa'ad Ibrahim`}
          title={'Associate Professor of Political Science'}
          position={
            'Trade & Investment Policy Expert | Entrepreneurship Consultant'
          }
          text1={`Dr. Bashir Sa'ad Ibrahim is an Associate Professor of Political Science who specialized in International Economic Relations with a strong interdisciplinary orientation in Global Trade and Development Policy, private sector development and entrepreneurship ecosystems. With over 15 years of combined academic, Chamber of Commerce and consultancy experiences, he has built a career at the intersection of policy, commerce, enterprise development, Investment Promotion, and international trade.`}
          showFull={showTeam2}
          text2={`He currently serves as Head of Department (HOD) Political Science at the Federal University Dutse, Nigeria. His professional background uniquely blends political science, economic policy analysis, and real-sector business engagement.`}
          text3={`Dr. Ibrahim accumulated extensive hands-on private sector experience within the Kano Chamber of Commerce, Industry, Mines and Agriculture (KACCIMA), serving in several strategic roles including Deputy Manager of Investment Promotion, Business Development, and Research & Consultancy, as well as Acting Director General.`}
          expertise1={`• Enterprise advisory and business counselling`}
          expertise2={`• SME growth strategies and market access`}
          expertise3={`• Trade competitiveness and export development`}
          expertise4={`• Cooperative and cluster development`}
          expertise5={`• Policy advisory for entrepreneurship programmes`}
          achievement1={`• PhD in Political Science (International Economic Relations)`}
          achievement2={`• Canton Fair at Guangzhou (China)`}
          achievement3={`• Thaifex World Food Asia (Thailand)`}
          achievement4={`• USETEC World Trade Fair (Germany)`}
          achievement5={`• Expert on ECOWAS Trade Liberalisation Scheme (ETLS) and AfCFTA`}
          onPress={() => {
            if (showTeam2) {
              setShowTeam2(false);
            } else {
              setShowTeam2(true);
            }
            setShowTeam1(false);
            setShowTeam3(false);
            setShowTeam4(false);
            setShowTeam5(false);
          }}
        />
      </View3>
      <View3 style={{ flexDirection: 'row' }}>
        <MembersView
          image={require('../../../assets/images/teamMembers/team3.png')}
          name={'Dr. Shashi Kant Prasad Chaudhary'}
          title={'Senior Economist | Financial & Trade Analyst'}
          position={'Academic Leader | Research-Driven Business Advisor'}
          text1={`Dr. Shashi Kant Prasad Chaudhary is a highly accomplished international economist, academic leader, and financial policy analyst with extensive experience across central banking, higher education, research, and policy advisory environments. He holds a PhD in International Economics and is currently a Senior Lecturer at British University Vietnam (BUV).`}
          showFull={showTeam3}
          text2={`His professional career spans central banking (Nepal Rastra Bank), university leadership, and international research collaboration, positioning him as a credible authority in economic analysis, trade, and financial systems. At British University Vietnam, Dr. Chaudhary has served as Programme Lead for both the International Business Management (IBM) programme and the MBA programme.`}
          text3={`Prior to his academic career in Vietnam, Dr. Chaudhary served at Nepal Rastra Bank, the central bank of Nepal, where he progressed from Assistant Director to Deputy Director in the Research Department. One of his most significant professional achievements was leading the 5th Household Budget Survey, a nationwide project involving over 8,000 households.`}
          expertise1={`• Global value chains and international trade`}
          expertise2={`• Financial economics and banking systems`}
          expertise3={`• External sector dynamics and macroeconomic stability`}
          expertise4={`• Risk management and financial regulation`}
          expertise5={`• MSME development and policy effectiveness`}
          achievement1={`• PhD, MA, PGCLTHE, SFHEA`}
          achievement2={`• Senior Fellow, Advance HE (UK)`}
          achievement3={`• Former Deputy Director, Central Bank of Nepal`}
          achievement4={`• 20+ peer-reviewed journal publications and book chapters`}
          onPress={() => {
            if (showTeam3) {
              setShowTeam3(false);
            } else {
              setShowTeam3(true);
            }
            setShowTeam2(false);
            setShowTeam1(false);
            setShowTeam4(false);
            setShowTeam5(false);
          }}
        />
        <MembersView
          image={require('../../../assets/images/teamMembers/team4.png')}
          name={`Dr. Sani Alhaji Garba`}
          title={'Chief Consultant & Platform Lead'}
          position={'ACCESS MENTOR - SEYO INTERCONTINENTAL LLC'}
          text1={`Dr. Sani Alhaji Garba is an academic consultant and instructional technologyspecialist with over two decades of professional experience spanning entrepreneurship education, enterprise development, digital learning systems, and organizational capacity building. He serves as Chief Consultant and Platform Lead for ACCESS MENTOR, where he provides strategic leadership for business counselling services, mentoring frameworks, and global training programmes.`}
          showFull={showTeam4}
          text2={`His work integrates research-based insight with practical enterprise applications. At ACCESS MENTOR, he oversees the design and quality assurance of specialized and customized business training programmes, develops mentoring standards aligned with international best practices, and advises on platform growth, innovation, and global partnerships.`}
          text3={`An internationally published scholar, Dr. Garba's research focuses on entrepreneurship education, technology integration in professional development, digital learning systems, and capacity development frameworks. His scholarship reinforces ACCESS MENTOR's positioning as a knowledge-driven and impact-oriented platform for business advisory and training.`}
          expertise1={`• Entrepreneurship development`}
          expertise2={`• Business model design and sustainability planning`}
          expertise3={`• SME advisory and startup mentoring`}
          expertise4={`• Strategic organizational development`}
          expertise5={`• Digital transformation for enterprises`}
          expertise6={`• Instructional technology and digital learning systems`}
          achievement1={`• PhD in Educational Technology (Computer-Assisted Instruction)`}
          achievement2={`• Master of Education in Social Studies Education`}
          achievement3={`• Bachelor of Education`}
          achievement4={`• UNIDO entrepreneurship and enterprise development programmes facilitator`}
          achievement5={`• Internationally published scholar`}
          onPress={() => {
            if (showTeam4) {
              setShowTeam4(false);
            } else {
              setShowTeam4(true);
            }
            setShowTeam1(false);
            setShowTeam3(false);
            setShowTeam2(false);
            setShowTeam5(false);
          }}
        />
      </View3>
      <View3 style={{ marginTop: 20, marginBottom: 40 }}>
        <MembersView
          image={require('../../../assets/images/teamMembers/team5.png')}
          name={'Regina Bamaiyi'}
          title={'Business Advisor | Enterprise Mentor'}
          position={'Financial Capability Specialist'}
          text1={`Regina Bamaiyi is a senior enterprise development professional and business advisor with over 15 years of experience supporting entrepreneurs, SMEs, and growth-stage businesses across diverse sectors. She specialises in practical business mentoring, financial planning support, and structured business development advisory.`}
          showFull={showTeam5}
          text2={`As a Business Advisor and Mentor with SEYO Intercontinental LLC and the ACCESS MENTOR platform, Regina works closely with clients to strengthen business foundations, improve financial discipline, and develop bankable business plans aligned with growth objectives.`}
          text3={`Regina brings extensive public-sector enterprise experience, having served for over a decade at the Small and Medium Enterprises Development Agency of Nigeria (SMEDAN), where she rose to the position of Chief Enterprise Officer. She supported thousands of small businesses through capacity-building programmes, cooperative development, and entrepreneurship initiatives.`}
          expertise1={`• Business plan development and refinement`}
          expertise2={`• Financial projections and basic financial modelling`}
          expertise3={`• Cash flow planning and cost management`}
          expertise4={`• Investment readiness preparation`}
          expertise5={`• Business model validation and growth structuring`}
          expertise6={`• Transition from informal to structured operations`}
          achievement1={`• Former Chief Enterprise Officer at SMEDAN`}
          achievement2={`• AAT Level 3 qualification (UK) - in progress`}
          achievement3={`• Doctoral research in Development at University of Bradford (UK)`}
          onPress={() => {
            if (showTeam5) {
              setShowTeam5(false);
            } else {
              setShowTeam5(true);
            }
            setShowTeam1(false);
            setShowTeam2(false);
            setShowTeam3(false);
            setShowTeam4(false);
          }}
        />
      </View3>
    </View2>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    // height: windowWidth > 1280 ? 3331 : 3500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    backgroundColor: Colors.white,
    width: '100%',
    borderBottomRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  container3: {
    width: windowWidth / 2.5,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
    lineHeight: 40,
    fontFamily: 'bold',
  },
  text1: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'light',
    lineHeight: 28,
  },
  text2: {
    fontSize: 22,
    fontFamily: 'bold',
    lineHeight: 26,
    color: Colors.white,
  },
  text3: {
    fontSize: 14,
    fontFamily: 'light',
    color: Colors.gray,
  },
  border: {
    borderTopColor: Colors.primary,
    borderTopWidth: 3,
    marginVertical: 20,
    width: 100,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,
    height: 320,
    width: '100%',
  },
  text4: {
    fontFamily: 'light',
    fontSize: 15,
    color: Colors.black,
    marginLeft: 10,
  },
  text5: {
    fontFamily: 'light',
    fontSize: 14,
    color: Colors.black,
    lineHeight: 26,
    marginTop: 20,
  },
  text5A: {
    fontFamily: 'light',
    fontSize: 14,
    color: Colors.black,
    lineHeight: 26,
    marginTop: 5,
  },
  pressText: {
    fontSize: 14,
    fontFamily: 'medium',
    color: Colors.primary,
  },
});
