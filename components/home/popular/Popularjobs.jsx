import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import { COLORS, SIZES } from '../../../constants'

import PopularjobCard from "../../../components/common/cards/popular/PopularJobCard"

import styles from './popularjobs.style'

import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {

  const router = useRouter();
  const {data, isLoading, error} = useFetch('search' , {
    query : 'React Developer',
    num_pages : 1,
  })

  const [selectedJob, setSelectedJob] = useState()
  const handleCardPress = (item) => {
    
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Jobs
        </Text>
        <TouchableOpacity>
          <Text style={Text.headerBtn}>
            Show All
          </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>
            Something went wrogn
          </Text>
        ) : (
          <FlatList 
            data={[1,2,3,4,5]}
            renderItem={({ item }) =>{
              <PopularjobCard item={item} />
            }}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap : SIZES.medium}} 
            horizontal
          />
        )}
        
      </View>
    </View>
  )
}

export default Popularjobs